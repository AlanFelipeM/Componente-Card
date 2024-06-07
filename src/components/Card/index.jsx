
import Button from "../Button"
import styles from "./styles.module.css"

export default function Card(props) {
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={props.posterImg} alt="props.Title" />
            <div>
                <h2>{props.title}</h2>
                <p>Adquira o pôster icônico de "Batman: The Dark Knight"! Com uma arte sombria e poderosa, este pôster captura a essência do épico confronto entre Batman e o Coringa. Em tons escuros e com o símbolo do morcego em chamas, ele trará a atmosfera intensa de Gotham diretamente para sua parede. Perfeito para colecionadores e fãs do Cavaleiro das Trevas, este pôster transformará qualquer ambiente, destacando seu amor pelo universo de Batman. Não perca a chance de ter essa peça única e impressionante em sua coleção!</p>
                <Button/>
            </div>
        </div>
    )
}