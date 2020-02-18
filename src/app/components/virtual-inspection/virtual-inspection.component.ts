import { Component, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { MediaCapture, CaptureVideoOptions, CaptureError } from '@ionic-native/media-capture/ngx';
import { Storage } from '@ionic/storage';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
const MEDIA_FILES_KEY = 'mediaFiles';

@Component({
  selector: 'app-virtual-inspection',
  templateUrl: './virtual-inspection.component.html',
  styleUrls: ['./virtual-inspection.component.scss'],
})
export class VirtualInspectionComponent implements OnInit {
  capturedSnapURL: string;
  photos: any;
  mediaFiles = [];
  @ViewChild('myvideo', { static: true }) myVideo: any;

  cameraOptions: CameraOptions = {
    quality: 50, // picture quality
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  public loadProgress: number;
  isVirtual: boolean = true;
  isPhotoIns: boolean = false;
  isVideoIns: boolean = false;
  constructor(private camera: Camera, private mediaCapture: MediaCapture, private storage: Storage, private file: File, private media: Media) { }

  ngOnInit() {
    this.loadProgress = 70;
    this.photos = [];
  }

  startInspection() {
    this.isVirtual = false;
    this.isPhotoIns = true;
  }

  takeSnap() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      // this.camera.DestinationType.FILE_URI gives file URI saved in local
      // this.camera.DestinationType.DATA_URL gives base64 URI

      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photos.push(base64Image);
      this.photos.reverse();
      this.capturedSnapURL = base64Image;
    }, (err) => {
      console.log(err);
    });
  }

  onTakePhoto() {
    this.isPhotoIns = false;
    this.isVideoIns = true
    this.isVirtual = false;
  }


  ionViewDidLoad() {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      this.mediaFiles = JSON.parse(res) || [];
    })
  }

  captureAudio() {
    this.mediaCapture.captureAudio().then(res => {
      this.storeMediaFiles(res);
    }, (err: CaptureError) => console.error(err));
  }
  onTakeVideo() {
    let options: CaptureVideoOptions = {
      limit: 1,
      duration: 30
    }
    this.mediaCapture.captureVideo(options).then((res: any) => {
      let capturedFile = res[0];
      let fileName = capturedFile.name;
      let dir = capturedFile['localURL'].split('/');
      dir.pop();
      let fromDirectory = dir.join('/');
      var toDirectory = this.file.dataDirectory;

      this.file.copyFile(fromDirectory, fileName, toDirectory, fileName).then((res) => {
        this.storeMediaFiles([{ name: fileName, size: capturedFile.size }]);
      }, err => {
        console.log('err: ', err);
      });
    },
      (err: CaptureError) => console.error(err));
  }
  play(myFile) {
    if (myFile.name.indexOf('.wav') > -1) {
      const audioFile: MediaObject = this.media.create(myFile.localURL);
      audioFile.play();
    } else {
      let path = this.file.dataDirectory + myFile.name;
      let url = path.replace(/^file:\/\//, '');
      let video = this.myVideo.nativeElement;
      video.src = url;
      video.play();
    }
  }

  storeMediaFiles(files) {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      if (res) {
        let arr = JSON.parse(res);
        arr = arr.concat(files);
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
      } else {
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files))
      }
      this.mediaFiles = this.mediaFiles.concat(files);
    })
  }
}
