import React from "react";
import {
    BrowserRouter, Routes, Route
} from "react-router-dom";
import styled from "styled-components";

import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
    return (
            <BrowserRouter>
                <MainTitleText>미니 블로그 프로젝트</MainTitleText>
                <Routes>
                    <Route index element={<MainPage/>}/>
                    <Route path="post-write" element={<PostWritePage/>}/>
                    <Route path="post/:postId" element={<PostViewPage/>}/> {/*동적 파라미터는 앞에 콜론 붙이기*/}
                </Routes>
            </BrowserRouter>
    );
}

export default App;