import React, { useState } from "react"
import { useSpring, a } from "react-spring/three"
import { HTML } from "drei"

const Box = () => {
	const [hovered, setHovered] = useState(false)
	const [active] = useState(false)
	const props = useSpring({
		scale: active ? [1.5, 2, 1.5] : [1, 1, 1],
		color: hovered ? "hotpink" : "gray",
	})

	//executed in every file

	return (
		<a.mesh
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
			// onClick={() => setActive(!active)}

			castShadow
		>
			<boxBufferGeometry attach='geometry' args={[30, 50, 1]} />
			<a.meshPhysicalMaterial color={0x000000} attach='material' />
			<HTML scaleFactor={20}>
				<span className='content title'>BOYLE HEIGHTS</span>
				<div className='content line1'>
					Current % <br />
					80 AQI
				</div>
				<div className='content line2'>
					Did you know..? <br />
					<span>
						Pollution kills over 1 million seabirds and 100 million mammals
						annually.
					</span>
				</div>
				<div className='content line3'>
					Boyle Heights Artists <br />
					<span>
						Pollution kills over 1 million seabirds and 100 million mammals
						annually.
					</span>
				</div>
				<div className='content line4'>
					News <br />
					<span>
						{/* LAPD Officer Caught On Camera Beating Man In Boyle Heights Pleads
						Not Guilty To Assault Charges */}
					</span>
				</div>
			</HTML>
		</a.mesh>
	)
}

export default Box
