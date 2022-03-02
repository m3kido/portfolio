import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-1.svg'
import Icon3 from '../../images/svg-1.svg'
import { ServicesCard,ServicesContainer,ServicesH1,ServicesIcon,
ServicesH2,ServicesP,ServicesWrapper } from './ServicesElements'

const Services = () => {
  return (
    <>
     <ServicesContainer id='services'>
         <ServicesH1>My Projects</ServicesH1>
         <ServicesWrapper>
             <ServicesCard>
                 <ServicesIcon src={Icon1}/>
                 <ServicesH2>Reduce expenses</ServicesH2>
                 <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
             </ServicesCard>
             <ServicesCard>
                 <ServicesIcon src={Icon2}/>
                 <ServicesH2>Create Designs</ServicesH2>
                 <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
             </ServicesCard>
             <ServicesCard>
                 <ServicesIcon src={Icon3}/>
                 <ServicesH2>Web Apps</ServicesH2>
                 <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
             </ServicesCard>
         </ServicesWrapper>
     </ServicesContainer>
    </>
  )
}

export default Services