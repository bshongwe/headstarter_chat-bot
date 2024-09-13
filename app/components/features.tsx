import React from 'react'
import {
    BlocksIcon,
    DollarSignIcon,
    MessagesSquareIcon,
    SettingsIcon,
    ShieldCheckIcon,
    ZapIcon,
} from 'lucide-react'
import { type FeatureCardProps } from '~/types/feature-card'
import FeatureCard from './feature-card'

const featuresData: FeatureCardProps[] = [
    {
        title: 'Can I customise Bunny-Ai?',
        description:
            'Bunny-Ai can be integrated into your system as an add-on or as a customised standalone feature.',
        icon: <SettingsIcon size={28} className='text-blue-500' />,
        backgroundColor: 'from-blue-500/20 to-blue-500/5',
    },
    {
        title: 'Is my user data safe with Bunny-Ai?',
        description: 'We take cybersecurity seriously and ensure your data is safe. Data privacy is our priority.',
        icon: <ShieldCheckIcon size={28} className='text-green-500' />,
        backgroundColor: 'from-green-500/20 to-green-500/5',
    },
    {
        title: 'Is Bunny-Ai user-friendly?',
        description: 'Bunny-Ai is easy to use. For developers and integration, please use our documentation.',
        icon: <ZapIcon size={28} className='text-yellow-500' />,
        backgroundColor: 'from-yellow-500/20 to-yellow-500/5',
    },
    {
        title: 'Can I integrate Bunny-Ai?',
        description:
            'Bunny-Ai can be integrated into your system as an add-on or as a customised standalone feature.',
        icon: <BlocksIcon className='text-red-500' />,
        backgroundColor: 'from-red-500/20 to-red-500/5',
    },
    {
        title: 'Is Bunny-Ai affordable?',
        description:
            'Bunny-Ai offers affordable pricing plans for all users and business sizes due to flexible offers.',
        icon: <DollarSignIcon className='text-pink-500' />,
        backgroundColor: 'from-pink-500/20 to-pink-500/5',
    },
    {
        title: 'I need Bunny-Ai support?',
        description: 'Bunny-Ai support team is available 24/7 to help you navigate or troubleshoot Bunny-Ai.',
        icon: <MessagesSquareIcon size={28} className='text-purple-500' />,
        backgroundColor: 'from-purple-500/20 to-purple-500/5',
    },
]

const Features = () => {
    return (
        <section className='mx-auto mt-48 max-w-7xl px-5'>
            <div className='mx-auto flex max-w-2xl flex-col gap-6 text-center'>
                <div>
                    <span className='rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25'>
                        <span className='brightness-[1.7]'>
                            Prompt Examples
                        </span>
                    </span>
                    <h1 className='mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Frequently{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            used{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            prompts{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            by most{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            users
                        </span>
                    </h1>
                </div>
                <p className='text-lg text-muted-foreground'>
                    <span className='hidden lg:block'>
                        Take note that these are merely examples, not to be taken literally...
                    </span>
                    <span className='block lg:hidden'>
                        Collected from Bunny-Ai metrics data.
                    </span>
                </p>
            </div>
            <div>
                <ul className='mt-20 grid place-content-center gap-20 md:grid-cols-2 lg:grid-cols-3'>
                    {featuresData.map((feature, i) => (
                        <li key={i}>
                            <FeatureCard
                                title={feature.title}
                                description={feature.description}
                                backgroundColor={feature.backgroundColor}
                                icon={feature.icon}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Features
