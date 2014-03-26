function I2 = shift(I, dx, dy)
    I2 = I;
    x = size(I, 2);
    y = size(I, 1);
    z = size(I, 3);
    for i=1:z
        if(abs(dx)>x || abs(dy)>y )
            I2(:, :, i) = zeros(y, x);
            return;
        end
        if dy>0
           I2(:, :, i) = [zeros(dy, x); I2(1:end-dy, :, i)];
        elseif dy <0
           I2(:, :, i) = [I2(1-dy:end, :, i); zeros(-dy, x)];
        end

        if dx>0
           I2(:, :, i) = [zeros(y, dx), I2(:, 1:end-dx, i)];
        elseif dx <0
           I2(:, :, i) = [I2(:, 1-dx:end, i), zeros(y, -dx)];
        end
    end
end