/* eslint-disable no-unused-vars */
import React from 'react'
import { PiUserCircle } from 'react-icons/pi'
import { useSelector } from 'react-redux'

const Avatar = ({ userId, name, imageUrl, width, height }) => {
	const onlineUsers=useSelector(state => state?.user?.onlineUsers)

	let avatarName=''
	if (name) {
		const splitName=name?.split(' ')
		if (splitName.length>1) {
			avatarName=splitName[0][0]+splitName[1][0]
		} else {
			avatarName=splitName[0][0]
		}
		avatarName=avatarName.toUpperCase()
	}

	const bgColor=[
		'bg-sky-200'
	]
	const randomNumber=Math.floor(Math.random()*1)

	const isOnline=onlineUsers?.includes(userId)

	return (
		<div className={'text-slate-800 rounded-full font-bold relative'} 
			style={{ width:width+'px', height:height+'px' }} >
			{
				imageUrl ? (
					<img 
						src={imageUrl}
						alt={name}
						className='overflow-hidden rounded-full'
						style={{ width:width+'px', height:height+'px' }}
					>
					</img>
				):(
					name ? (
						<div style={{ width:width+'px', height:height+'px' }} 
							className={`overflow-hidden rounded-full flex justify-center items-center text-lg ${bgColor[randomNumber]}`}>
							{avatarName}
						</div>
					) :(
						<PiUserCircle size={width}/>
					)
				)
			}
			{
				isOnline && (
					<div className='bg-green-600 p-1 absolute bottom-2 -right-1 z-0 rounded-full'></div>

				)
			}
		</div>
	)
}

export default Avatar