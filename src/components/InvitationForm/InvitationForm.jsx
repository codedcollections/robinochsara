import s from "./InvitationForm.module.css"
const InvitationForm = () => {
  return (
    <div id={s["invitationform"]} className="flex flex-down">
      <h2>OSA</h2>

      <p>
        I formuläret nedan kan ni anmäla er till bröllopet. Ni hittar ert namn i
        namnlistan och därefter kan ni klicka er vidare för att fylla i er
        information.
      </p>
      <a href="https://docs.google.com/forms/d/10muhxMfkWUVQH-m_EiotIevPq2c1MHin4K6Y8SI82go/edit">
        OSA för Robin och Saras bröllop{" "}
      </a>
    </div>
  )
}
export default InvitationForm
