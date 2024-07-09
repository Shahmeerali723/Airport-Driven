import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const ServiceCard = ({ ...props }: any) => {

    const {data} = props

    return (
        <Card className='text-center'>
            <CardHeader>
                <Avatar className='mx-auto'>
                    <AvatarImage src={data?.image || "/service1.png"} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </CardHeader>
            <CardContent>
                <CardTitle className='font-poppins font-semibold text-lg capitalize'>
                    {data?.title||"Lorem Ipsum"}
                </CardTitle>
                <CardDescription className='font-poppins text-black font-semibold'>
                    {data?.desc||"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
                </CardDescription>
            </CardContent>

        </Card>
    )
}

export default ServiceCard