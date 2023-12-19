function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
      if(d1<=d2&&m1<=m2&&y1<=y2){
        return 0;
    }else if(d2<d1&&m2===m1&&y2===y1){
        return (15*(d1-d2))
    }else if(m1>m2&&y2===y1){
        return( (m1-m2)*500)
    }else if (y1>y2){
        return 10000
    }
}
