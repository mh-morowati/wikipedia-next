import Image from 'next/image';


export default function Footer() {
    return (
        <footer className="text-[12px] relative w-[95%] mx-auto h-[200px]">
            <hr className="border-zinc-500 " />
            <div className="relative top-24">
                <p className='inline-block text-sky-600 cursor-pointer'>
                Privacy policy &nbsp;&nbsp;&nbsp;About Wikipedia &nbsp;&nbsp;&nbsp;Disclaimers &nbsp;&nbsp;&nbsp;
                Contact Wikipedia &nbsp;&nbsp;&nbsp;Code of Conduct &nbsp;&nbsp;&nbsp;Developers &nbsp;&nbsp;&nbsp;Statistics
                 &nbsp;&nbsp;&nbsp;Cookie statement &nbsp;&nbsp;&nbsp;Mobile view</p>
                 <div className='inline-block float-right'>
                    <a href="https://wikimediafoundation.org/" target="_blank" rel="noopener noreferrer">
                    <Image className='inline-block mx-2' width={88} height={31} alt='wiki' src={'/Next.js - Wikipedia_files/poweredby_mediawiki_88x31.png'}/>
                    </a>
                    <a href="https://www.mediawiki.org/wiki/MediaWiki" target="_blank" rel="noopener noreferrer">
                    <Image className='inline-block' width={88} height={31} alt='wiki' src={'/Next.js - Wikipedia_files/wikimedia-button.png'}/>
                    </a>
                 </div>
                 </div>
        </footer>
    )
}
