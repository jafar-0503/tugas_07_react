import React, {Component} from 'react';
import { Card, Container, Breadcrumb, Row, Col, Button, Badge, Media } from 'react-bootstrap';

class App extends Component {
  render() {
    return(
      <Container><br />
      <Row>
        <Col>
        <Button variant="info">Website React Bootstrap</Button>
        </Col>

        <Col md="auto">
        <Button variant="primary">
          Notification <Badge variant="light">9</Badge>
         </Button>&nbsp;
        <Button variant="primary">
          Message <Badge variant="light">19</Badge>
        </Button>
        </Col>

        <Col xs lg="2">
        <Media>
            <img
              width={25}
              height={25}
              className="mr-3"
              src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
              alt="Icon"
            />
            <Media.Body>
              <h6>Mukhamat Jafar</h6>
            </Media.Body>
          </Media>
        </Col>
      </Row><br />


      <Row>
        <Col></Col>
        <Col>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Info</Breadcrumb.Item>
        </Breadcrumb>
        </Col>
      </Row>
      <br />

      <Row>
      <Card style={{ width: '17rem' }}>
        <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100" />
        <Card.Body>
          <Card.Title><center>Diego Godin Ukir Rekor Spesial Lawan Thailand</center></Card.Title>
          <Card.Text>
          <justify>
            Godin sekarang menjadi pemain Uruguay dengan caps terbanyak
            setlah membantu negaranya melibas Thailand di final Piala Tiongkok.
            Diego Godin boleh berbangga setelah resmi menjadi.
          </justify>
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '17rem' }}>
        <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" />
        <Card.Body>
          <Card.Title><center>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</center></Card.Title>
          <Card.Text>
            Ayah sang pemain bintang Brazil berusaha meredam rumor ketarikan Madrid. Neymar sedang berdiskusi dengan Paris Saint-Germain soal perpanjangan kontrak bersama kampiun Ligue 1 Prancis, demikian kata ayahnya.
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '17rem' }}>
        <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" />
        <Card.Body>
          <Card.Title><center>Inggris Mau Jadi Tim Terbaik Di Dunia</center></Card.Title>
          <Card.Text>
          <justify>
            Kumpulan talenta terbaik yang dimiliki Inggris saat ini membuat Barkley sangat optimis. Ross Barkley merasa Inggris sudah berada dijalur yang benar untuk bisa menjadi tim terbaik di Dunia denga banyaknya talenta yang muncul sekarang ini.
          </justify>
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '17rem' }}>
        <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600" />
        <Card.Body>
          <Card.Title><center>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</center></Card.Title>
          <Card.Text>
          <justify>
            Gelandang tim nasional (timnas) Indonesia U-23 Sani Rizki Fauzi menegaskan kesiapannya untuk bermain pada laga melawan Brunei Darussalam U-23. Kedua tim akan bentrok pada laga pamungkas group K.
          </justify>
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
      </Row>
      </Container>
    )
  }
}

export default App;
