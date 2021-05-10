import TitleCardContainers from "../TitleCardsContainers/titleCardContainers";

function CardDatabaseLastProduct(props) {
    return (
        <div class="col-lg-6 mb-4">
            <div class="card shadow mb-4">
                <TitleCardContainers 
                title = {"Last product in Data Dase"}
                />
                <div class="card-body">
                    <div class="text-center">
                        <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src={props.image} alt="dummy" />
                    </div>
                    <p>{props.content}</p>
                    <a target="_blank" rel="nofollow" href="/">{props.linkContent}</a>
                </div>
            </div>
        </div>
    )
}
export default CardDatabaseLastProduct;