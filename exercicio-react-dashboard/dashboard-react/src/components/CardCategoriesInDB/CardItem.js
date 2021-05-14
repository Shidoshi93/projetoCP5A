function CardItem(props) {
    return (
        <div class="col-lg-6 mb-4">
            <div class="card bg-info text-white shadow">
                <div class="card-body">
                    {props.content}
                </div>
            </div>
        </div>
    )
}
export default CardItem;