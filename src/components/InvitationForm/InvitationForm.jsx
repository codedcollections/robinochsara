import s from "./InvitationForm.module.css"
const InvitationForm = () => {
  return (
    <div id={s["invitation"]} className="flex">
      <h2>OSA</h2>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdOsShYA2MpR1bCT3TSU5SBVM8rnFPEbSgF6aM6z8nM9sgO3Q/viewform?embedded=true"
        width="100%"
        height="4378"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Läser in …
      </iframe>
    </div>
  )
}
export default InvitationForm
