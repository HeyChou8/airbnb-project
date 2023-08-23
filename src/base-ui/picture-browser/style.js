import styled from "styled-components";

export const BrowserWrapper =  styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #333;
    .top {
        position: relative;
        height: 86px;
        .close-btn {
            position: absolute;
            top: 15px;
            right: 25px;
            cursor: pointer;
        }
    }
    .slider {
      position:relative;
      display: flex;
      justify-content: center;
      flex: 1;
      .control {
      display: flex;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      justify-content:space-between;
      bottom: 0;
      color: #fff;
      .btn {
      display: flex;
      justify-content:center;
      align-items: center;
      width: 83px;
      height:100%;
      cursor: pointer;
      }
    }
    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
    }
}
.preview {
        height: 100px;
        margin-top: 10px;
    }
`