import React from 'react';
import {Footer, FooterLink} from "flowbite-react";
import {Link} from "react-router-dom";
import {BsGithub, BsDiscord, BsYoutube} from "react-icons/bs";
import { TbFileCv } from "react-icons/tb";

export default function FooterCom() {
    return (
        <Footer container className='border border-t-8 border-teal-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                        <Link to='/' className='self-center whitespace-nowrap text-lg text-sm:text-xl font-semibold dark:text-white'>
                            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white '>Vishwa's</span>
                            Blog
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                        <div>
                            <Footer.Title title='ABOUT'/>
                            <Footer.LinkGroup col>
                                <Footer.Link href='https://portfolio-teal-delta-76.vercel.app/' target='_blank'
                                             rel='noopener noreferrer'>
                                    My Projects
                                </Footer.Link>
                            </Footer.LinkGroup>
                            <Footer.LinkGroup col>
                                <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'>
                                    Vishwa's Blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='FOLLOW US'/>
                            <Footer.LinkGroup col>
                                <Footer.Link href='https://github.com/vsgames42' target='_blank'
                                             rel='noopener noreferrer'>
                                    GitHub
                                </Footer.Link>
                            </Footer.LinkGroup>
                            <Footer.LinkGroup col>
                                <Footer.Link href='https://discord.gg/StP78bE67C' target='_blank'
                                             rel='noopener noreferrer'>
                                    Discord
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='LEGAL'/>
                            <Footer.LinkGroup col>
                                <Footer.Link href='#' target='_blank'
                                             rel='noopener noreferrer'>
                                    Privacy Policy
                                </Footer.Link>
                            </Footer.LinkGroup>
                            <Footer.LinkGroup col>
                                <Footer.Link href='#' target='_blank'
                                             rel='noopener noreferrer'>
                                    Terms &amp; Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider/>
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright href='/' by="Vishwa's Blog" year={new Date().getFullYear()} />
                    <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                        <Footer.Icon href='https://github.com/vsgames42' target='_blank' rel='noopener noreferrer' icon={BsGithub}/>
                        <Footer.Icon href='https://discord.gg/StP78bE67C' target='_blank' rel='noopener noreferrer' icon={BsDiscord}/>
                        <Footer.Icon href='https://portfolio-teal-delta-76.vercel.app/' target='_blank' rel='noopener noreferrer' icon={TbFileCv}/>
                        <Footer.Icon href='http://www.youtube.com/@vsgames4641' target='_blank' rel='noopener noreferrer' icon={BsYoutube}/>
                    </div>
                </div>
            </div>
        </Footer>
    )
}