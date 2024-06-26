import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '@components/Layout';

export default function Contact() {
	return (
		<>
			<Helmet>
				<title>Contact</title>
			</Helmet>
			<Layout>
				<section className='mt-[calc(var(--header-height-mobile)+1rem)] flex flex-col items-center font-[Manrope] 2xl:mt-[calc(var(--header-height-2xl)+1rem)]'>
					<div className='flex justify-between my-8 items-center border-[3px] border-gray-400 bg-gray-300 p-3 w-[80%] rounded-lg shadow-lg hover:border-gray-600'>
						<h4 className='text-2xl md:flex md:w-full 2xl:text-2xl'>
							Github:
							<br />
							<a
								className='text-base sm:text-xl md:text-2xl md:w-full md:text-center'
								href='https://github.com/yasinnkhann'
								target='_blank'
								rel='noreferrer'
							>
								github.com/yasinnkhann
							</a>
						</h4>
						<div className='ml-4'>
							<a
								className='md:w-full md:text-center'
								href='https://github.com/yasinnkhann'
								target='_blank'
								rel='noreferrer'
							>
								<StaticImage
									className='h-[3.125rem] w-[3.125rem] hover:animate-[wiggle_1s_ease-in-out_infinite]'
									src='../assets/contacts/github-svgrepo-com.svg'
									alt='github icon'
								/>
							</a>
						</div>
					</div>

					<div className='flex justify-between my-8 items-center border-[3px] border-blue-400 bg-blue-200 p-3 w-[80%] rounded-lg shadow-lg hover:border-blue-600'>
						<h4 className='text-2xl md:flex md:w-full 2xl:text-2xl'>
							LinkedIn:
							<br />
							<a
								className='text-base sm:text-xl md:text-2xl md:w-full md:text-center'
								href='https://www.linkedin.com/in/yasinnkhann/'
								target='_blank'
								rel='noreferrer'
							>
								linkedin.co/yasinnkhann
							</a>
						</h4>
						<div className='ml-4'>
							<a
								href='https://www.linkedin.com/in/yasinnkhann/'
								rel='noreferrer'
								target='_blank'
							>
								<StaticImage
									className='h-[3.125rem] w-[3.125rem] hover:animate-[wiggle_1s_ease-in-out_infinite]'
									src='../assets/contacts/linkedin-svgrepo-com.svg'
									alt='linkedin icon'
								/>
							</a>
						</div>
					</div>

					<div className='flex justify-between my-8 items-center border-[3px] border-purple-500 bg-blue-300 p-3 w-[80%] rounded-lg shadow-lg hover:border-purple-700'>
						<h4 className='text-2xl md:flex md:w-full 2xl:text-2xl'>
							Discord:
							<br />
							<a
								className='text-base sm:text-xl md:text-2xl md:w-full md:text-center'
								href='https://discordapp.com/users/yasinnkhann/'
								target='_blank'
								rel='noreferrer'
							>
								yasinnkhann
							</a>
						</h4>
						<div className='ml-4'>
							<a
								href='https://discordapp.com/users/yasinnkhann/'
								rel='noreferrer'
								target='_blank'
							>
								<StaticImage
									className='h-[3.125rem] w-[3.125rem] hover:animate-[wiggle_.8s_ease-in-out_infinite]'
									src='../assets/contacts/discord-v2-svgrepo-com.svg'
									alt='discord icon'
								/>
							</a>
						</div>
					</div>

					<div className='flex justify-between my-8 items-center border-[3px] border-red-400 bg-red-200 p-3 w-[80%] rounded-lg shadow-lg hover:border-red-600'>
						<h4 className='text-2xl md:flex md:w-full 2xl:text-2xl'>
							Email:
							<br />
							<a
								className='text-base sm:text-xl md:text-2xl md:w-full md:text-center'
								href='mailto:yasinkhan500@gmail.com'
								target='_blank'
								rel='noreferrer'
							>
								yasinkhan500@gmail.com
							</a>
						</h4>
						<div className='ml-1'>
							<a
								href='mailto:yasinkhan500@gmail.com'
								target='_blank'
								rel='noreferrer'
							>
								<StaticImage
									className='h-[3.125rem] w-[3.125rem] hover:animate-[wiggle_1s_ease-in-out_infinite]'
									src='../assets/contacts/email-svgrepo-com.svg'
									alt='email icon'
								/>
							</a>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}
