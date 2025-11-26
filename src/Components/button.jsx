import React from 'react'

const Button = ({buttonText, buttonStyles }) => {
    return (
        <>
<div className={`${buttonStyles}`}>
    {buttonText}
</div>
        </>
    )
}

export default Button