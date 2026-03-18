'use client'

import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Text, OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import './InteractiveTechSphere.css'

interface TechItem {
  name: string
  category: string
  level: number
  color: string
}

const TechData: TechItem[] = [
  { name: 'React', category: 'Frontend', level: 95, color: '#61dafb' },
  { name: 'TypeScript', category: 'Language', level: 90, color: '#3178c6' },
  { name: 'Node.js', category: 'Backend', level: 88, color: '#68a063' },
  { name: 'Python', category: 'Language', level: 85, color: '#3776ab' },
  { name: 'AWS', category: 'Cloud', level: 82, color: '#ff9900' },
  { name: 'Docker', category: 'DevOps', level: 80, color: '#2496ed' },
  { name: 'MongoDB', category: 'Database', level: 78, color: '#47a248' },
  { name: 'GraphQL', category: 'API', level: 85, color: '#e10098' },
  { name: 'Next.js', category: 'Framework', level: 88, color: '#888888' },
  { name: 'Three.js', category: '3D', level: 75, color: '#888888' },
  { name: 'PostgreSQL', category: 'Database', level: 80, color: '#336791' },
  { name: 'Redis', category: 'Database', level: 75, color: '#dc382d' },
  { name: 'Tailwind', category: 'CSS', level: 90, color: '#38b2ac' },
  { name: 'Jest', category: 'Testing', level: 85, color: '#c21325' },
  { name: 'Git', category: 'Tools', level: 95, color: '#f05032' },
]

const TechOrbit: React.FC<{
  tech: TechItem
  index: number
  total: number
  hoveredTech: string | null
  setHoveredTech: (tech: string | null) => void
}> = ({ tech, index, total, hoveredTech, setHoveredTech }) => {
  const meshRef = useRef<any>()
  const textRef = useRef<any>()

  const phi = Math.acos(-1 + (2 * index) / total)
  const theta = Math.sqrt(total * Math.PI) * phi
  const radius = 3
  const x = radius * Math.cos(theta) * Math.sin(phi)
  const y = radius * Math.sin(theta) * Math.sin(phi)
  const z = radius * Math.cos(phi)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = y + Math.sin(state.clock.elapsedTime + index) * 0.1
    }
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position)
    }
  })

  const isHovered = hoveredTech === tech.name

  return (
    <group position={[x, y, z]}>
      <Sphere
        ref={meshRef}
        args={[0.1, 16, 16]}
        onPointerEnter={() => setHoveredTech(tech.name)}
        onPointerLeave={() => setHoveredTech(null)}
      >
        <meshStandardMaterial
          color={isHovered ? '#00ff88' : tech.color}
          emissive={isHovered ? tech.color : '#000000'}
          emissiveIntensity={isHovered ? 0.5 : 0}
          transparent
          opacity={0.9}
        />
      </Sphere>
      <Text
        ref={textRef}
        position={[0.3, 0, 0]}
        fontSize={0.15}
        color={isHovered ? '#00ff88' : '#ffffff'}
        anchorX="left"
        anchorY="middle"
        maxWidth={2}
      >
        {tech.name}
      </Text>
    </group>
  )
}

const TechSphere: React.FC<{
  hoveredTech: string | null
  setHoveredTech: (tech: string | null) => void
}> = ({ hoveredTech, setHoveredTech }) => {
  const groupRef = useRef<any>()

  useFrame((_, delta) => {
    if (groupRef.current && !hoveredTech) {
      groupRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial
          color="#00a2ff"
          transparent
          opacity={0.2}
          emissive="#00a2ff"
          emissiveIntensity={0.3}
        />
      </Sphere>
      {TechData.map((tech, index) => (
        <TechOrbit
          key={tech.name}
          tech={tech}
          index={index}
          total={TechData.length}
          hoveredTech={hoveredTech}
          setHoveredTech={setHoveredTech}
        />
      ))}
    </group>
  )
}

const TechInfoPanel: React.FC<{ tech: TechItem | null }> = ({ tech }) => {
  if (!tech) {
    return (
      <motion.div
        className="tech-info-panel"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h3>✨ Tech Universe</h3>
        <p>Hover over any technology to see details</p>
        <div className="tech-stats">
          <div className="stat">
            <span className="number">{TechData.length}</span>
            <span className="label">Technologies</span>
          </div>
          <div className="stat">
            <span className="number">
              {Math.round(TechData.reduce((acc, t) => acc + t.level, 0) / TechData.length)}%
            </span>
            <span className="label">Avg. Proficiency</span>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="tech-info-panel active"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h3 style={{ color: tech.color }}>{tech.name}</h3>
      <div className="tech-meta">
        <span className="category">{tech.category}</span>
        <span className="level">{tech.level}% Proficiency</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${tech.level}%`, backgroundColor: tech.color }}
        />
      </div>
      <p>Expertise in building scalable applications with {tech.name}</p>
    </motion.div>
  )
}

const InteractiveTechSphere: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const currentTech = hoveredTech ? TechData.find((t) => t.name === hoveredTech) ?? null : null

  return (
    <section className="interactive-tech-sphere">
      <div className="container">
        <div className="tech-sphere-content">
          <div className="tech-visualization">
            <Canvas
              camera={{ position: [0, 0, 8], fov: 50 }}
              style={{ height: '500px', background: 'transparent' }}
            >
              <color attach="background" args={['#070710']} />
              <ambientLight intensity={0.3} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00a2ff" />
              <TechSphere hoveredTech={hoveredTech} setHoveredTech={setHoveredTech} />
              <OrbitControls
                enableZoom={true}
                enablePan={false}
                minDistance={4}
                maxDistance={12}
                autoRotate={!hoveredTech}
                autoRotateSpeed={2}
              />
            </Canvas>
          </div>
          <div className="tech-info">
            <TechInfoPanel tech={currentTech} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveTechSphere
