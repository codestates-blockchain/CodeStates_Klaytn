const fs = require("fs");
const path = require("path");

function main() {
  // NFT 이미지 갯수에 맞게 for문 설정
  for (let i = 1; i < 4; i++) {
    // 저장 위치 및 MetaData 파일명 설정
    // {프로젝트 위치}/myNFT/metadatas/codeStates_{i}.json
    // 여기서 파일명은 각자의 이미지 파일명으로 작성
    const metadatasDir = path.join(
      __dirname,
      "metadatas",
      `codeStates_${i}.json`
    );

    // IPFS 이미지 폴더 링크
    // FILL_ME_IN을 지우고 자신의 Pinata CID를 넣어주세요
    // ipfs://{CID}
    const ipfsPath = "ipfs://" + "FILL_ME_IN";

    // ERC721 MetaData 규칙에 맞게 json 생성
    // name, description은 사용자 설정.
    // image 는 업로드한 이미지 파일명으로 작성
    const metadata_json = {
      name: `codeStates #${i}`,
      description: `codeStates Klaytn NFT #${i}`,
      image: `${ipfsPath}/codeStates_${i}.jpg`,
    };
    // 각 NFT에 옵션 추가 (선택사항)
    metadata_json["attributes"] = [
      {
        trait_type: "Color",
        value: "White",
      },
      {
        trait_type: "RandNum",
        value: Math.floor(Math.random() * 100),
      },
    ];

    // MetaData 파일 생성
    fs.writeFileSync(metadatasDir, JSON.stringify(metadata_json));
  }
}

main();
