import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdCall } from 'react-icons/md'; 
import { AiOutlineSend } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
const Dashboard = () => {
    const contacts = [
        { name: 'John', status: 'Available', img: FaUserCircle },
        { name: 'Mary', status: 'Available', img: FaUserCircle },
        { name: 'Alexander', status: 'Available', img: FaUserCircle },
        { name: 'Adam', status: 'Available', img: FaUserCircle },
        { name: 'Alex', status: 'Available', img: FaUserCircle },
        { name: 'Larry', status: 'Available', img: FaUserCircle },
    ];

    return (
        <div className="w-screen flex h-screen bg-secondary">
            
            <div className="w-[25%] h-screen overflow-y-auto">
                <div className="flex justify-center items-center my-8">
                    <div className="border border-primary p-[2px] rounded-full">
                        <FaUserCircle size={50} width={50} color="gray" />
                    </div>
                    <div className="ml-8">
                        <h3 className="text-2xl">Tutorials Dev</h3>
                        <p className="text-lg font-light">My Account</p>
                    </div>
                </div>
                <div className="mx-14 mt-10">
                    <div className="text-primary text-lg">Messages</div>
                    <div>
                        {contacts.map(({ name, status, img }) => (
                            <div className="flex items-center py-8 border-b border-b-gray-300">
                                <div className="cursor-pointer flex items-center">
                                    <div>
                                        <FaUserCircle size={40} width={40} color="gray"/>
                                    </div>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-lg font-semibold">{name}</h3>
                                    <p className="text-sm font-light text-gray-600">{status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            
            <div className='w-[50%] h-screen bg-white flex flex-col items-center'>
                <div className='w-[75%] bg-secondary h-[80px] mt-14 rounded-full flex items-center px-14'>
                    <div className='cursor-pointer'><FaUserCircle size={40} width={40} color="gray"/></div>
                    <div className='ml-6 mr-auto'>
                        <h3 className='text-lg '>Alexander</h3>
                        <p className='text-sm font-light text-gray-600'>online</p>
                    </div>
                    <div>
                        {/* Call icon */}
                        <button className="ml-auto p-2 text-black-500 hover:text-green-700">
                            {/*<FaPhone size={24} /> {/* Use FaPhone */}
                            <MdCall size={24} /> 
                        </button>
                        </div>
                </div>
                <div className='h-[75%]w-full overflow-scroll bottom-b'>
                    <div className='p-14'>
                        <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                    </div>
                </div>
                <div className='p-14 w-full flex items-center'>
                    <input placeholder='Type a message...' className='w-[75%]' inputClassName='p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none'/>
                    <div className='ml-4 p-2 cursor-pointer bg-light rounded-full'> <button>
                            <AiOutlineSend />
                        </button>
                    </div>
                    <div>
                    <button>
                        <AiOutlinePlus />
                    </button>
                    </div>
                </div>

            </div>
            
            
            <div className="w-[25%] h-screen"></div>
        </div>
    );
};

export default Dashboard;
