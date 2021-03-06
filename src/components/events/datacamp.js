import React from 'react';
import { Helmet } from 'react-helmet';
import './events.css'

function Datacamp() {
	return (
		<div class="container">
			<Helmet>
				<title>Boğaziçi DataCamp - Boğaziçi Üniversitesi Bilişim Kulübü</title>
				<meta 
					name="description"
					content="Boğaziçi DataCamp, Veri Bilimi alanının günümüzdeki uygulamalarının ve geleceğinin tartışıldığı 7 günlük bir etkinliktir."
				/>				
			</Helmet>
			<div className="eventpage-header">
				<div class="card bg-dark text-white" >
					<img class="card-img-top" src="./etkinliklerimiz/etkinliklerimiz_datacamp.jpg" alt="Boğaziçi DataCamp" />
					{/*<div class="card-img-overlay">
                        <h1 class="card-title">Card title</h1>
                        
                    </div> */}
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h1>Boğaziçi DataCamp.</h1><br/>
					<p>
						Boğaziçi DataCamp, Veri Bilimi alanının günümüzdeki uygulamalarının ve geleceğinin tartışıldığı ve çoğunluğunu 3.-4. Sınıf ve
						Yüksek Lisans öğrencilerinin oluşturduğu katılımcılarının uygulayarak öğrenme şansı yakaladıkları iki günlük bir zirvedir.
						Bu zirve süresince, konuşmalar ve panellerde veri bilimi alanından bahsedilmesinin yanı sıra katılımcıların pratik yaparak
						öğrenebilecekleri workshoplar da gerçekleşir.

                    </p>
					<p><a class="btn btn-primary" href="http://datacamp.boun.edu.tr/" role="button" target="_blank" rel="noopener noreferrer">Web Sitesini Ziyaret Et</a></p>
				</div>
			</div>
			<hr />
		</div>
	);
}

export default Datacamp;