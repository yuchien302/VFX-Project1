$(function(){
  method_RAWHDR_pTM = "multiple RAW HDR + photoToneMap";
  gallery =  [
    {
      set_name: "01set",
      origin_320: [
        "images/01set_320/IMG_7242.jpg",
        "images/01set_320/IMG_7243.jpg",
        "images/01set_320/IMG_7244.jpg",
        "images/01set_320/IMG_7245.jpg",
        "images/01set_320/IMG_7246.jpg",
        "images/01set_320/IMG_7247.jpg"
      ],
      hdr_1024: [{
        src: "images/allset_ptm/01set_16tiff-RAWHDR-pTM.jpg",
        method: method_RAWHDR_pTM
      }
      ]
    },
    {
      set_name: "02set",
      origin_320: [
        "images/02set_320/IMG_7234.jpg",
        "images/02set_320/IMG_7235.jpg",
        "images/02set_320/IMG_7236.jpg",
        "images/02set_320/IMG_7237.jpg",
        "images/02set_320/IMG_7238.jpg",
        "images/02set_320/IMG_7239.jpg",
        "images/02set_320/IMG_7240.jpg",
        "images/02set_320/IMG_7241.jpg"
      ],
      hdr_1024: [{
        src: "images/allset_ptm/02set_16tiff-RAWHDR-pTM.jpg",
        method: method_RAWHDR_pTM
      }
      ]
    },
    {
      set_name: "03set",
      origin_320: [
        "images/03set_320/IMG_7223.jpg",
        "images/03set_320/IMG_7224.jpg",
        "images/03set_320/IMG_7225.jpg",
        "images/03set_320/IMG_7226.jpg",
        "images/03set_320/IMG_7227.jpg",
        "images/03set_320/IMG_7228.jpg",
        "images/03set_320/IMG_7229.jpg",
        "images/03set_320/IMG_7230.jpg",
        "images/03set_320/IMG_7231.jpg",
        "images/03set_320/IMG_7232.jpg",
        "images/03set_320/IMG_7233.jpg"
      ],
      hdr_1024: [{
        src: "images/allset_ptm/03set_16tiff-RAWHDR-pTM.jpg",
        method: method_RAWHDR_pTM
      }
      ]
    },
    {
      set_name: "04set",
      origin_320: [
        "images/04set_320/IMG_7214.jpg",
        "images/04set_320/IMG_7215.jpg",
        "images/04set_320/IMG_7216.jpg",
        "images/04set_320/IMG_7217.jpg",
        "images/04set_320/IMG_7218.jpg",
        "images/04set_320/IMG_7219.jpg",
        "images/04set_320/IMG_7220.jpg",
        "images/04set_320/IMG_7221.jpg",
        "images/04set_320/IMG_7222.jpg"
      ],
      hdr_1024: [{
        src: "images/allset_ptm/04set_16tiff-RAWHDR-pTM.jpg",
        method: method_RAWHDR_pTM
      }
      ]
    },
    {
      set_name: "05set",
      origin_320: [
        "images/05set_320/IMG_7205.jpg",
        "images/05set_320/IMG_7206.jpg",
        "images/05set_320/IMG_7207.jpg",
        "images/05set_320/IMG_7208.jpg",
        "images/05set_320/IMG_7209.jpg",
        "images/05set_320/IMG_7210.jpg"
      ],
      hdr_1024: [{
        src: "images/allset_ptm/05set_16tiff-RAWHDR-pTM.jpg",
        method: method_RAWHDR_pTM
      }
      ]
    },
    {
      set_name: "06set",
      origin_320: [
        "images/06set_320/IMG_7192.jpg",
        "images/06set_320/IMG_7193.jpg",
        "images/06set_320/IMG_7194.jpg",
        "images/06set_320/IMG_7195.jpg",
        "images/06set_320/IMG_7196.jpg",
        "images/06set_320/IMG_7197.jpg",
        "images/06set_320/IMG_7198.jpg",
        "images/06set_320/IMG_7199.jpg",
        "images/06set_320/IMG_7200.jpg",
        "images/06set_320/IMG_7201.jpg",
        "images/06set_320/IMG_7202.jpg",
        "images/06set_320/IMG_7203.jpg",
        "images/06set_320/IMG_7204.jpg"
      ],
      hdr_1024: [{
        src: "images/allset_ptm/06set_16tiff-RAWHDR-pTM.jpg",
        method: method_RAWHDR_pTM
      }
      ]
    },
    {
      set_name: "07set",
      origin_320: [
        "images/07set_320/IMG_7180.jpg",
        "images/07set_320/IMG_7181.jpg",
        "images/07set_320/IMG_7182.jpg",
        "images/07set_320/IMG_7183.jpg",
        "images/07set_320/IMG_7184.jpg",
        "images/07set_320/IMG_7185.jpg",
        "images/07set_320/IMG_7186.jpg",
        "images/07set_320/IMG_7187.jpg",
        "images/07set_320/IMG_7188.jpg",
        "images/07set_320/IMG_7189.jpg",
        "images/07set_320/IMG_7190.jpg",
        "images/07set_320/IMG_7191.jpg"
      ],
      hdr_1024: [{
        src: "images/allset_ptm/07set_16tiff-RAWHDR-pTM.jpg",
        method: method_RAWHDR_pTM
      }
      ]
    }

    
  ]

  source   = $("#gallery-template").html()
  template = Handlebars.compile(source)
  $('#gallery-area').html(template(gallery))
})



  