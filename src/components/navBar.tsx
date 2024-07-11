
import LogoImg from '../assets/img/Logo.png'
import Logo from './logo'

export default function NavBar() {
    return (
        <section className="flex justify-between items-center">
            <Logo logo={LogoImg} />
            <article className="flex items-center gap-14">
                <div className="flex items-center gap-8">
                    {["Products", "Features", "About", "Contact"].map((text, index) => (
                        <h4 key={index} className="text-base font-normal leading-7 tracking-tight text-left text-white">
                            {text}
                        </h4>
                    ))}
                </div>
                <div className="flex items-center">
                    <button className="flex justify-center items-center w-40 h-12 p-4 rounded-full hover:bg-blue-600 transition duration-300">
                        <h5 className="text-white w-auto">Login</h5>
                    </button>
                    <div className="h-12 w-0 border-l border-gray-300 mx-6"></div>
                    <button className="flex w-40 justify-center items-center h-12 p-4 rounded-full  hover:bg-blue-600 transition duration-300">
                        <h5 className="w-auto text-white">Register</h5>
                    </button>
                </div>
            </article>
        </section>
    )
}
