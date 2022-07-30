import {FC} from 'react'

type headerProps = {
    title: string
}
export const HEADER: FC<headerProps> = ({title}) => (
    <header className="text-base Poppins-SemiBold text-white space-y-0.5">
        <div className="">{title}</div>
        <div className="border-b-2 border-white w-7"></div>
    </header>
)
