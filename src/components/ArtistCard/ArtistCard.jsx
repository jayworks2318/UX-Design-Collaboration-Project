import styles from "./ArtistCard.module.css";

export default function ArtistCard({ artData }) {
    return (
        <div className={styles.artCard}>
            
                <img style={{height: "inherit", width: "inherit"}} src={artData.image} />
            
            <div className="btTextBox">
                {/*justify content spaace between */}
                <div className="artText">
                    {/* <p stye={{ fontWeight: 'bold' }}>{artData.user.firstName} {artData.user.lastName}</p> */}
                    {/* ternary if name length <0 then blah */}
                    <p> {artData.title}</p>
                </div>
                <div className="views">
                    <p>
                        {artData.views}
                    </p>
                </div>

            </div>
        </div>
    );
}

