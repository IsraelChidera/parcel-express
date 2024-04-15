import Container from '../Container';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="pt-6 pb-56 relative bg-primary">
            <Image src="/block.png" alt="block svg" className="z-20 absolute top-0 left-0" width={627} height={194} />
            <Image src="/block2.png" alt="block svg" className="z-20 absolute bottom-0 right-0" width={627} height={152} />
            <Container className="text-white ">
                <div className='flex items-center justify-between'>
                    <div>
                        <h3 className="text-base md:text-xl">Parcel<span className="italic">Express</span></h3>
                    </div>

                    <div className='z-40'>
                        <Link href="/parcel" className="block bg-primary text-white rounded-[14px] border border-[#fff] py-[8px] px-[14px] md:text-sm text-base font-medium">
                            Get started
                        </Link>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar