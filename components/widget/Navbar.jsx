import Container from '@/components/Container';
import Button from '@/components/Button';
import Image from 'next/image';
const Navbar = () => {
    return (
        <nav className="pt-6 pb-56 relative bg-primary">
            <Image src="/block.png" alt="block svg" className="absolute top-0 left-0" width={627} height={194} />
            <Image src="/block2.png" alt="block svg" className="absolute bottom-0 right-0" width={627} height={152} />
            <Container className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl">Parcel<span className="italic">Express</span></h3>                    
                </div>

                <Button>
                    Get started
                </Button>
            </Container>
        </nav>
    )
}

export default Navbar