class Block {
  Blockchain;
  preHash;
  index;
  timeStamp;
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
   所在的链
   上一个区块的哈希
   块数
   时间戳(自己的哈希)

  */
  constructor(Blockchain,preHash,index,timeStamp) {
    this.Blockchain=Blockchain;
    this.preHash=preHash;
    this.timeStamp=timeStamp;
  }
 
}

export default Block
