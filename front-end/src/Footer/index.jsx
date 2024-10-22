import './style.css'

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='clinic-cards'>
                <div className='clinic-card'>
                    <div className="clinic-title">Unidade I</div>
                    <div className="clinic-text">Telefone: (XX) xxxxx-xxxx</div>
                    <div className="clinic-text">Endereço: xxxxxxxxxxxxxxxxxxxx</div>
                    <div className="clinic-text">Atendimento: das xxh às xxh, xxxxxx e xxxxxx</div>
                </div>
                <div className='clinic-card'>
                    <div className="clinic-title">Unidade II</div>
                    <div className="clinic-text">Telefone: (XX) xxxxx-xxxx</div>
                    <div className="clinic-text">Endereço: xxxxxxxxxxxxxxxxxxxx</div>
                    <div className="clinic-text">Atendimento: das xxh às xxh, xxxxxx e xxxxxx</div>
                </div>
            </div>
        </footer>
    )
}