/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import logo from '../../../assets/xing.svg'
import { IoHome } from 'react-icons/io5'
import { IoPeopleSharp } from 'react-icons/io5'
import { BiSolidVideos } from 'react-icons/bi'
import { MdGroups } from 'react-icons/md'
import { IoGameControllerSharp } from 'react-icons/io5'
import { IoMenu } from 'react-icons/io5'
import { BiSolidMessageRounded } from 'react-icons/bi'
import { IoNotifications } from 'react-icons/io5'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoLogOut } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { logout } from '../../../redux/userSlice'
import { logoutServer } from '../../../apis/IndexApi'
import EditUserDetails from '../../EditUserDetails'
import { FaEdit } from 'react-icons/fa'
import { searchUserGroup } from '../../../apis/UserApi'
import Tab from '../../chat/rightbar/Tab'

const navbar = ({ user, socketConnection }) => {
	const location = useLocation()
	const dispatch=useDispatch()
	const navigate=useNavigate()
	const [showOptions, setShowOptions] = useState(false)
	const [showEdit, setShowEdit] = useState(false)

	const handleShowEdit=() => {
		setShowEdit(!showEdit)
		setShowOptions(false)
	}
	const handleLogout=async() => {
		if (socketConnection) {
			socketConnection.disconnect()
		}
		await logoutServer() //don dep cookie
		dispatch(logout())
		localStorage.clear()
		navigate('/email')
	}
	const [search, setSearch]=useState('')
	const [resultSearchUser, setResultSearchUser]=useState([])
	const [resultSearchGroup, setResultSearchGroup]=useState([])
	useEffect(() => {
		searchUserGroup(search==='' ? null: search).then((data) => {
			setResultSearchUser(data?.dataUser)
			setResultSearchGroup(data?.dataGroup)
		})
	}, [search])

	const [activeTab, setActiveTab] =useState('Nguời dùng')
	return (
		<div className='w-full h-14 flex items-center justify-between'>
			<div className='h-auto w-auto flex items-center gap-3 px-5'>
				<Link to={'/home'}>
					<img
						src={logo}
						alt='logo'
						className='rounded-full w-10 h-10'
					/>
				</Link>
				<div className='relative'>
					<input
						type='text'
						name='search'
						value={search}
						onChange={(e) => setSearch(e?.target?.value)}
						placeholder='Search'
						className='bg-slate-400 rounded-lg py-1 px-2 placeholder:text-slate-300'
					/>
					{
						search!=='' && (
							<div className='absolute left-0 mt-2 p-2 w-72 bg-white rounded-lg shadow-xl'>
								<div className='flex justify-center'>
									<div className={'w-full flex items-center gap-1'}>
										<Tab label="Nguời dùng" isActive={activeTab === 'Nguời dùng'} onClick={() => setActiveTab('Nguời dùng')}/>
										<Tab label="Nhóm" isActive={activeTab === 'Nhóm'} onClick={() => setActiveTab('Nhóm')}/>
									</div>
								</div>
								{
									activeTab==='Nguời dùng' && (
										<div className='bg-slate-200 rounded-md'>
											{resultSearchUser?.length===0 &&(
												<p className='text-center text-slate-500 py-2'>Not user found!</p>
											)}
											{resultSearchUser?.length>0 && (
												<div className='h-auto max-h-[200px] scroll-container'>
													{resultSearchUser.map((user, index) => {
														return (
															<Link to={`/profileUser/${user?._id}`} className='flex items-center gap-2 p-2 hover:bg-slate-300 rounded cursor-pointer'>
																<img
																	src={user?.profile_pic}
																	alt='logo'
																	className='rounded-full w-10 h-10 object-cover'
																/>
																<p>{user?.name}</p>
															</Link>
														)
													})}
												</div>
											)}
										</div>
									)
								}
								{
									activeTab==='Nhóm' && (
										<div className='bg-slate-200 rounded-md'>
											{resultSearchGroup?.length===0 &&(
												<p className='text-center text-slate-500 py-2'>Not group found!</p>
											)}
											{resultSearchGroup?.length>0 && (
												<div className='h-auto max-h-[200px] scroll-container'>
													{resultSearchGroup.map((group, index) => {
														return (
															<Link to={`/profileGroup/${group?._id}`} className='flex items-center gap-2 p-2 hover:bg-slate-300 rounded cursor-pointer'>
																<img
																	src={group?.profile_pic}
																	alt='logo'
																	className='rounded-full w-10 h-10 object-cover'
																/>
																<p>{group?.name}</p>
															</Link>
														)
													})}
												</div>
											)}
										</div>
									)
								}
							</div>
						)
					}
				</div>
			</div>
			<div className='h-auto w-auto flex items-center gap-5'>
				<Link to={'/home'} className={'w-20 h-auto flex justify-center'}>
					<IoHome className={`w-8 h-8 cursor-pointer ${location.pathname === '/home' ? 'text-slate-300':'hover:text-slate-300 text-slate-800'}`}/>
				</Link>
				<Link to={'/friend-request'} className='w-20 h-auto flex justify-center'>
					<IoPeopleSharp className={`w-8 h-8 cursor-pointer ${location.pathname === '/friend-request' ? 'text-slate-300':'hover:text-slate-300 text-slate-800'}`}/>
				</Link>
				<Link to={'/video'} className='w-20 h-auto flex justify-center'>
					<BiSolidVideos className={`w-8 h-8 cursor-pointer ${location.pathname === '/video' ? 'text-slate-300':'hover:text-slate-300 text-slate-800'}`}/>
				</Link>
				<Link to={'/groups'} className='w-20 h-auto flex justify-center'>
					<MdGroups className={`w-8 h-8 cursor-pointer ${location.pathname === '/groups' ? 'text-slate-300':'hover:text-slate-300 text-slate-800'}`}/>
				</Link>
				<Link to={'/games'} className='w-20 h-auto flex justify-center'>
					<IoGameControllerSharp className={`w-8 h-8 cursor-pointer ${location.pathname === '/games' ? 'text-slate-300':'hover:text-slate-300 text-slate-800'}`}/>
				</Link>
			</div>
			<div className=' h-auto w-auto flex items-center px-5 gap-3'>
				<div className='w-auto h-auto flex justify-center rounded-full bg-slate-600 p-[5px] hover:bg-slate-400'>
					<IoMenu className='w-7 h-7 text-slate-800 cursor-pointer'/>
				</div>
				<Link to={'/chat'} className={`w-auto h-auto flex justify-center rounded-full p-[5px] 
               ${location.pathname.includes('/chat') ? 'bg-slate-400':'hover:bg-slate-400 bg-slate-600'}`}>
					<BiSolidMessageRounded className='w-7 h-7 text-slate-800  cursor-pointer'/>
				</Link>
				<div className='w-auto h-auto flex justify-center rounded-full bg-slate-600 p-[5px] hover:bg-slate-400'>
					<IoNotifications className='w-7 h-7 text-slate-800 cursor-pointer'/>
				</div>
				<div className='relative'>
					<img
						src={user?.profile_pic}
						alt='logo'
						className='rounded-full w-[38px] h-[38px] bg-slate-300 cursor-pointer object-cover'
						onClick={() => setShowOptions(!showOptions)}
					/>
					{showOptions && (
						<div className='absolute right-0 mt-2 p-2 w-72 bg-white rounded-lg shadow-xl'>
							<div className='w-full h-auto bg-slate-200 rounded py-1 px-2'>
								<div className='flex items-center gap-2'>
									<img
										src={user?.profile_pic}
										alt='logo'
										className='rounded-full object-cover w-10 h-10 border-[1px] border-slate-400'
									/>
									<p className='text-nomal font-semibold'>{user?.name}</p>
								</div>
								<div className='flex justify-center mt-2'>
									<hr className='bg-slate-300 h-[1.5px] w-[90%]'/>
								</div>
								<Link to={`/profileUser/${user?._id}`}>
									<p className='text-blue-600 hover:text-blue-800'>Go your profile</p>
								</Link>
							</div>
							<div className='w-full h-auto hover:bg-slate-200 rounded py-2 px-2 mt-2 cursor-pointer' onClick={() => handleShowEdit()}>
								<div className='flex items-center gap-2'>
									<FaEdit size={23} className=''/>
									<p className='text-nomal font-semibold'>Edit profile</p>
								</div>
							</div>
							<div className='w-full h-auto hover:bg-slate-200 rounded py-2 px-2 mt-1 cursor-pointer' onClick={() => handleLogout()}>
								<div className='flex items-center gap-2'>
									<IoLogOut size={23} className=''/>
									<p className='text-nomal font-semibold'>Logout</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
			{
				showEdit && (<EditUserDetails onClose={() => handleShowEdit()}/>)
			}
		</div>
	)
}

export default navbar