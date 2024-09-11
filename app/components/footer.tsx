const Footer = () => {
    return (
        <footer className='mt-24 flex h-32 flex-col items-center justify-between bg-gradient-to-b from-transparent to-primary/20'>
            <div className='p-5 text-center'>
                2024 | {' '}
                <span className='whitespace-nowrap '>
                    <a
                        href='mailto:shongwe.bhekizwe@yahoo.com'
                        className='font-medium text-primary brightness-150 hover:underline'
                    >
                        Bunny-Ai
                    </a>{' '}
                    🚀
                </span>
            </div>
            <div className='mt-auto h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent'></div>
        </footer>
    )
}

export default Footer
