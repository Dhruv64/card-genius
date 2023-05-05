import React from 'react'

const Detail4 = () => {
    return (
        <div className='bg-blue-200'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 lg:px-40 py-12 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center h-96 w-96 rounded" alt="hero" src="./mock.png"/>
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Share your business card with anyone, anywhere.</h1>
                        <p className="mb-8 leading-relaxed">Even if they don't have the app, you may share your HiHello digital business card with anyone. (Yes, the recipient does not have to have HiHello in order to get your card!) You can distribute your card in a variety of ways:</p>
                        <div className='grid grid-cols-2 gap-10'>
                            <div>
                                <p>QR code</p>
                                <p>Email</p>
                                <p>Text</p>
                            </div>
                            <div>
                                <p>Airdrop</p>
                                <p>Social media</p>
                                <p>Link sharing</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Detail4