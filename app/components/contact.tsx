import { LinkedinIcon, Loader2Icon, TwitterIcon, GithubIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import Discord from './icons/discord'
import { useForm } from '@formspree/react'

const Contact = () => {
    const [state, handleSubmit] = useForm('xpzgladz')
    return (
        <section className='mx-auto mt-48 flex max-w-7xl flex-col items-center gap-20 px-5 lg:flex-row'>
            <div className='mx-auto flex max-w-2xl flex-grow basis-0 flex-col gap-6'>
                <div>
                    <h1 className='mt-4 scroll-m-20 text-center font-inter text-4xl font-extrabold tracking-tight lg:text-left lg:text-5xl'>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Contact{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Us{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Today
                        </span>
                    </h1>
                </div>
                <p className='text-center text-lg text-muted-foreground lg:text-left'>
                    <span className='hidden lg:block'>
                        If you have any questions, suggestions, or would like to
                        report bug fixes to any of Bunny-Ai features, please do
                        not hesitate to reach out. We would love to hear from you!
                    </span>
                    <span className='block lg:hidden'>
                        Boniface Munga | Salman Qurban | Ernest Shongwe
                    </span>
                </p>
                <div className='flex justify-center lg:justify-start'>
                    <div className='flex flex-col gap-4 lg:items-start'>
                        <a
                            href='https://twitter.com/'
                            className='inline-flex gap-2'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <TwitterIcon className='h-6 w-6 text-primary' />{' '}
                            <span>bunny-Ai</span>
                        </a>
                        <a
                            href='https://www.linkedin.com/'
                            className='flex items-center gap-2'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <LinkedinIcon className='h-6 w-6 text-primary' />{' '}
                            <span>bunny-Ai</span>
                        </a>
                        <span className='flex items-center gap-2'>
                            <Discord className='h-6 w-6 fill-primary' />{' '}
                            <span>bunny-Ai</span>
                        </span>
                        <a
                            href='https://www.github.com/'
                            className='flex items-center gap-2'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <GithubIcon className='h-6 w-6 text-primary' />{' '}
                            <span>bunny-Ai</span>
                        </a>
                    </div>
                </div>
            </div>
            <form
                onSubmit={handleSubmit}
                className='gradient-border relative flex w-full max-w-xl flex-grow basis-0 flex-col gap-4 rounded-md bg-gradient-to-br from-white/5 to-transparent p-6 before:bg-gradient-to-br before:from-white/5 before:to-transparent'
            >
                <div className='flex w-full flex-col gap-1.5'>
                    <Label
                        className='text-left text-muted-foreground'
                        htmlFor='name'
                    >
                        Full name
                    </Label>
                    <Input
                        required
                        type='text'
                        id='name'
                        placeholder='your name'
                        name='fullname'
                        className='w-full'
                    />
                </div>
                <div className='flex w-full flex-col gap-1.5'>
                    <Label
                        className='text-left text-muted-foreground'
                        htmlFor='contact-email'
                    >
                        Email
                    </Label>
                    <Input
                        required
                        type='email'
                        placeholder='user.name@email.com'
                        name='contact-email'
                        id='contact-email'
                        className='w-full'
                    />
                </div>
                <div className='grid w-full gap-1.5'>
                    <Label
                        htmlFor='message'
                        className='text-left text-muted-foreground'
                    >
                        Message
                    </Label>
                    <Textarea
                        required
                        placeholder='Write your message here...'
                        id='message'
                        name='message'
                    />
                </div>
                {!state.succeeded && (
                    <Button variant={'secondary'} disabled={state.submitting}>
                        {state.submitting && (
                            <Loader2Icon className='mr-2 h-4 w-4 animate-spin' />
                        )}
                        {state.submitting && 'Sending'}
                        {!state.succeeded &&
                            !state.submitting &&
                            'Send message'}
                    </Button>
                )}
                {state.succeeded && (
                    <Button
                        variant={'secondary'}
                        className='pointer-events-none'
                    >
                        Message sent!
                    </Button>
                )}
            </form>
        </section>
    )
}

export default Contact
