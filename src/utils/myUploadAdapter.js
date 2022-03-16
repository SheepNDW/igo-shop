// 透過 CKEditor 提供的自定義方法來實現上傳圖片功能

import { useUpload } from '@/hooks'
const { file, upload: uploadImg } = useUpload()

class MyUploadAdapter {
  constructor(loader) {
    this.loader = loader
  }

  // 上傳圖片
  upload() {
    return new Promise((resolve, reject) => {
      this.loader.file
        .then(loadFile => {
          file.value = loadFile
          return uploadImg().then(data => {
            resolve({ default: data })
          })
        })
    })
  }
}

export default MyUploadAdapter
