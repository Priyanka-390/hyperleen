"use client"
import React from 'react';
import Heading from './common/Heading';
import Paragraph from './common/Paragraph';
import EmailForm from './EmailForm';
export default function GetInTouch() {
    return(
        <>
        <div className="pt-[180px] pb-7">
            <div className="container xl:max-w-[1140px] xl:px-0">
<Heading name="Get in touch with" darkBlueText="Hyperleen" className="text-center mb-4"/>
<Paragraph paraText="Take your experience a step further! Subscribe to our monthly newsletter for exclusive access to discounts, promotions, Hyperleen events and more. We’d hate to be annoying, please unsubscribe anytime! –" className=" text-center max-w-[731px] mx-auto text-opacity-70 mb-6"/>
<EmailForm/>
            </div>
        </div>
        </>
    )
}