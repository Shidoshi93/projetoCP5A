import TitleCardContainers from "../TitleCardsContainers/titleCardContainers";
import CardItem from "./CardItem";

function CardCategoriesInDB() {
    return (
        <div class="col-lg-6 mb-4">
            <div class="card shadow mb-4">
                {/* <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div> */}
                <TitleCardContainers 
                    title = {"Categories in Data Base"}
                />
                <div class="card-body">
                    <div class="row">
                        
                        <CardItem
                            content={"Category 01"}
                        />

                        <CardItem
                            content={"Category 02"}
                        />

                        <CardItem
                            content={"Category 03"}
                        />

                        <CardItem
                            content={"Category 04"}
                        />

                        <CardItem
                            content={"Category 05"}
                        />

                        <CardItem
                            content={"Category 06"}
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardCategoriesInDB;