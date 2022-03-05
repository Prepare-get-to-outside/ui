import { Icon as MIcon} from '@mui/material'
import React from 'react'
import { styled } from '@mui/system';

interface IconProps {
    icon: string
}

export const Icon = ({icon, ...rest}:IconProps) => {
    return (
        <MIcon component="i" {...rest}>
            {icon}
        </MIcon>
    )
}


const IconStyled = styled(MIcon)``