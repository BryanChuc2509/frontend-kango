import HeaderPaidUser from "../../../components/PaidUser/HeaderPaidUser"
import StepPaidUser from "../../../components/PaidUser/StepPaidUser"
import BodyPaidUser from "../../../components/PaidUser/BodyPaidUser"
import FooterPaidUser from "../../../components/PaidUser/FooterPaidUser"

export default function PaidUser(){
    return(
        <>
        <HeaderPaidUser/>
        <div className="w-[95%] mt-20 border-t border-[#04843c] mx-auto" />
        <StepPaidUser/>
        <BodyPaidUser/>
        <FooterPaidUser/> 
        </>
    )
}