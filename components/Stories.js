import React from 'react'
import StoryCard from './StoryCard'

const stories = [
    {
        id: 1,
        name: "James Bond",
        src: "https://links.papareact.com/r57",
        profile: ""
    },
    {
        id: 2,
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        id: 3,
        name: "Jeff Bezos",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p"
    },
    {
        id: 3,
        name: "Mark Zuckerburg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf"
    },
    {
        id: 4,
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy"
    }
]

function Stories() {
    return (
        <div className='flex justify-center space-x-3 mx-auto'>
            {stories.map(story =>
                <StoryCard
                    key={story.id}
                    name={story.name}
                    src={story.src}
                    profile={story.profile}
                />
            )}
        </div>
    )
}

export default Stories