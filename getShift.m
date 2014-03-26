function [x1, y1, sI2] = getShift(I1, I2, layer)
    x1=0;
    y1=0;

    if nargin<3
        layer=0;
        BW1 = MTB(I1);
        BW2 = MTB(I2);
    else
        BW1 = I1;
        BW2 = I2;
    end
    
    if(median(size(I1))<6) return; end
    
    [dx1,dy1] = getShift(impyramid(BW1, 'reduce'), impyramid(BW2, 'reduce'), layer+1);
    
    
    minerr = sum(sum(BW1~=BW2));
    x1 = 2*dx1;
    y1 = 2*dy1;

    for dx=-2:2
        for dy=-2:2
            BW2s = shift(BW2, 2*dx1+dx, 2*dy1+dy);
            err = sum(sum(BW1~=BW2s));
            if err<minerr
                minerr=err;
                x1=2*dx1+dx;
                y1=2*dy1+dy;
            end
        end
    end
    if layer==0
        sI2 = shift(I2, x1, y1);   
    end

end