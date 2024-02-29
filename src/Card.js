function Card() {
    return (
        <div className="d-flex justify-content-center">
            <div className="row row-cols-1 row-cols-md-3 g-3">
                <div className="col">
                    <div className="card text-bg-primary" style={{width: '18rem'}}>
                        <div className="card-header"><h5 className="card-title">Card 1</h5></div>
                        <div className="card-body">
                            <p className="card-text">Hello there from Card 1! A great place to be because blue is the best color!</p>
                        </div>
                    </div> 
                </div>
                <div className="col">
                    <div className="card text-bg-dark" style={{width: '18rem'}}>
                        <div className="card-header"><h5 className="card-title">Card 2</h5></div>
                        <div className="card-body">
                            <p className="card-text">Hello from Card 2! Fun fact, my favorite game series is the Splatoon series!</p>
                        </div>
                    </div> 
                </div>
                <div className="col">
                    <div className="card text-bg-secondary" style={{width: '18rem'}}>
                        <div className="card-header"><h5 className="card-title">Card 3</h5></div>
                        <div className="card-body">
                            <p className="card-text">Hello from Card 3! Another fun fact, the card styles on Bootstrap are cool!</p>
                        </div>
                    </div> 
                </div>
            </div> 
        </div>
    );
  }

  export default Card;