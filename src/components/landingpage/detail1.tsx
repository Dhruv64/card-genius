import React from 'react'

const Detail1 = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 lg:px-40 py-12 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Us</h1>
                        <p className="mb-8 leading-relaxed">Information exchange in the modern era is done through digital business cards. Digital business cards, also referred to as virtual or electronic cards, are more interactive, economical, and environmentally friendly than traditional cards. The ability to distribute digital business cards with anybody, everywhere is a big advantage. You can design your own digital business cards with HiHello on a computer, an iOS device, or an Android device.</p>

                        
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-contain object-center h-80 w-80 lg:h-96 lg:w-96 rounded" alt="hero" src="./detail1.png" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Detail1