import { useState , useEffect} from "react";
import { Container, Row , Col} from "react-bootstrap";
import { ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/images/header-img.svg";


export const Banner = () => {
    const [loopNum , setLoopNum] = useState(0);
    const [isDeleting , setIsDeleting] = useState(false);
    const [text , setText] = useState('');
    const [delta , setDelta] = useState(300 - Math.random() * 10);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    },[text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length -1) : fullText.substring(0,text.length +1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        };

        if(!isDeleting && updatedText == fullText){
            setIsDeleting(true);
            setDelta(period);
            
        }else if(isDeleting && fullText ==""){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }

    const toRotate = ["Web-Developer", "Web-Designer" ,"UI/UX Designer"];
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tag-line">Welcome to my portfolio!</span>
                        <h1>{`Hi I'm webcoded`} <span className="wrap">Web-developer</span></h1>
                        <p>abc...........</p>
                        <button onClick={() => console.log('connected!')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col  xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header image"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
