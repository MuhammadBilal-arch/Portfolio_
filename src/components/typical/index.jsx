import React from 'react'
import Typical from 'react-typical'

export const TypicalComponent = ({loop_no}) => {
    return (
        <Typical
            steps={[
                "I'm Muhammad Bilal",
                5000,
                "I'm Professional React.js Developer",
                5000,
            ]}
            loop={loop_no}
            wrapper="p"
        />
    )
}
