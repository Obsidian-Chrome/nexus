import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const BlindsThreeOverlay = ({ open }) => {
  const containerRef = useRef(null)
  const rendererRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const slatsRef = useRef([])
  const rafRef = useRef(null)
  const openRef = useRef(open)

  useEffect(() => {
    openRef.current = open
  }, [open])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = window.innerWidth
    const height = window.innerHeight

    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0, 12)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFShadowMap
    rendererRef.current = renderer
    container.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45)
    scene.add(ambientLight)

    const dirLight = new THREE.DirectionalLight(0xffedd6, 1.2)
    dirLight.position.set(5, 8, 8)
    dirLight.castShadow = true
    dirLight.shadow.mapSize.width = 1024
    dirLight.shadow.mapSize.height = 1024
    dirLight.shadow.camera.near = 0.1
    dirLight.shadow.camera.far = 30
    dirLight.shadow.camera.left = -15
    dirLight.shadow.camera.right = 15
    dirLight.shadow.camera.top = 15
    dirLight.shadow.camera.bottom = -15
    scene.add(dirLight)

    const backLight = new THREE.DirectionalLight(0xc2e9ff, 0.35)
    backLight.position.set(-4, 2, -5)
    scene.add(backLight)

    // Dimensions du frustum visible à la profondeur des stores
    const distance = 12
    const vFOV = (45 * Math.PI) / 180
    const visibleHeight = 2 * Math.tan(vFOV / 2) * distance
    const visibleWidth = visibleHeight * (width / height)

    // Store remplit toute la page
    const slatWidth = visibleWidth * 1.02
    const railHeight = visibleHeight * 0.035
    const slatHeight = visibleHeight * 0.028
    const slatDepth = visibleHeight * 0.006
    const gap = visibleHeight * 0.008
    const topPadding = visibleHeight * 0.02
    const railTopY = visibleHeight / 2 - railHeight / 2
    const usableHeight = visibleHeight - railHeight - topPadding
    const slatCount = Math.floor(usableHeight / (slatHeight + gap))

    const slatGeometry = new THREE.BoxGeometry(slatWidth, slatHeight, slatDepth)
    const slatMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      roughness: 0.85,
      metalness: 0.1,
    })

    const slats = []
    const firstSlatY = railTopY - railHeight / 2 - topPadding - slatHeight / 2
    for (let i = 0; i < slatCount; i++) {
      const slat = new THREE.Mesh(slatGeometry, slatMaterial)
      slat.position.y = firstSlatY - i * (slatHeight + gap)
      slat.castShadow = true
      slat.receiveShadow = true
      scene.add(slat)
      slats.push(slat)
    }
    slatsRef.current = slats

    // Cordes de maintien verticales aux extrémités gauche/droite
    const cordRadius = visibleHeight * 0.005
    const cordGeometry = new THREE.CylinderGeometry(cordRadius, cordRadius, usableHeight, 8)
    const cordMaterial = new THREE.MeshStandardMaterial({ color: 0xf0f0f0, roughness: 0.9 })
    const cordZ = slatDepth + 0.02
    const leftCord = new THREE.Mesh(cordGeometry, cordMaterial)
    leftCord.position.set(-visibleWidth / 2, firstSlatY - usableHeight / 2, cordZ)
    scene.add(leftCord)
    const rightCord = new THREE.Mesh(cordGeometry, cordMaterial)
    rightCord.position.set(visibleWidth / 2, firstSlatY - usableHeight / 2, cordZ)
    scene.add(rightCord)

    // Petits nœuds de cordes visibles
    const knotGeometry = new THREE.SphereGeometry(cordRadius * 1.4, 8, 8)
    for (let i = 0; i < slatCount; i++) {
      const y = firstSlatY - i * (slatHeight + gap)
      const leftKnot = new THREE.Mesh(knotGeometry, cordMaterial)
      leftKnot.position.set(-visibleWidth / 2, y, cordZ)
      scene.add(leftKnot)
      const rightKnot = new THREE.Mesh(knotGeometry, cordMaterial)
      rightKnot.position.set(visibleWidth / 2, y, cordZ)
      scene.add(rightKnot)
    }

    // Top rail (haut) collé en haut
    const railGeometry = new THREE.BoxGeometry(slatWidth + visibleHeight * 0.02, railHeight, visibleHeight * 0.018)
    const railMaterial = new THREE.MeshStandardMaterial({ color: 0x1f1f1f, roughness: 0.8, metalness: 0.1 })
    const rail = new THREE.Mesh(railGeometry, railMaterial)
    rail.position.y = railTopY
    rail.position.z = slatDepth / 2
    rail.castShadow = true
    rail.receiveShadow = true
    scene.add(rail)

    // Background darkening plane
    const bgGeometry = new THREE.PlaneGeometry(visibleWidth * 2, visibleHeight * 2)
    const bgMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false
    })
    const bgPlane = new THREE.Mesh(bgGeometry, bgMaterial)
    bgPlane.position.z = -2
    scene.add(bgPlane)

    const handleResize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate)

      // open=true : lattes fines et tournées (on voit à travers)
      // open=false : lattes épaisses et plates (store fermé)
      const targetRotation = openRef.current ? 0.85 : 0
      const targetScaleY = openRef.current ? 0.35 : 1
      const targetBg = openRef.current ? 0.25 : 0.85
      slatsRef.current.forEach((slat) => {
        slat.rotation.x += (targetRotation - slat.rotation.x) * 0.08
        slat.scale.y += (targetScaleY - slat.scale.y) * 0.08
      })
      bgPlane.material.opacity += (targetBg - bgPlane.material.opacity) * 0.05

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-20 pointer-events-none"
      style={{ mixBlendMode: 'normal' }}
    />
  )
}

export default BlindsThreeOverlay
