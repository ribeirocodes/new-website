import { useState } from 'react';

import Resume from '../../components/resume';

export default function ResumeLogin() {
  const [proceed, setProceed] = useState(false);

  const tryPassword = async () => {

    const response = await fetch("api/login", {
      method: "POST",
      body: JSON.stringify({
        informedPassword: "abacate"
      })
    })

    if (response.ok) {
      setProceed(true);
    }
  }


  return (
    <>
      <Resume />
    </>
  )
}

