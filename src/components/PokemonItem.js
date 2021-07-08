const PokemonItem = ({title, imgUrl, type, 
                        title2, imgUrl2, type2, 
                        title3, imgUrl3, type3,
                        title4, imgUrl4, type4,
                        title5, imgUrl5, type5,
                        title6, imgUrl6, type6,
                        title7, imgUrl7, type7,
                        title8, imgUrl8, type8,
                        title9, imgUrl9, type9,
                        title10, imgUrl10, type10,
                                                    }) => {
    return(
        <div>
            <h6>{title}</h6>
            <img src={imgUrl} alt={title} />
            <h6>{type}</h6>

            <h6>{title2}</h6>
            <img src={imgUrl2} alt={title2} />
            <h6>{type2}</h6>

            <h6>{title3}</h6>
            <img src={imgUrl3} alt={title3} />
            <h6>{type3}</h6>

            <h6>{title4}</h6>
            <img src={imgUrl4} alt={title4} />
            <h6>{type4}</h6>

            <h6>{title5}</h6>
            <img src={imgUrl5} alt={title5} />
            <h6>{type5}</h6>

            <h6>{title6}</h6>
            <img src={imgUrl6} alt={title6} />
            <h6>{type6}</h6>

            <h6>{title7}</h6>
            <img src={imgUrl7} alt={title7} />
            <h6>{type7}</h6>

            <h6>{title8}</h6>
            <img src={imgUrl8} alt={title8} />
            <h6>{type8}</h6>

            <h6>{title9}</h6>
            <img src={imgUrl9} alt={title9} />
            <h6>{type9}</h6>

            <h6>{title10}</h6>
            <img src={imgUrl10} alt={title10} />
            <h6>{type10}</h6>
        </div>
    )
}

export default PokemonItem