clc; clear;
path = './image2_16tiff';
files = dir(fullfile(path,'*.tiff'));
photos = zeros(length(files), 2760, 3684, 3);


%% Read in all photo files
I0 = imread([path,'/',files(1).name]);
photos(1, :, :, :) = I0;
for k = 2 : length(files)
   disp(['[align] ' num2str(k)]);
   I1 = imread([path,'/',files(k).name]);
   [~, ~, I1s] = getShift(I0,I1);
   photos(k, :, :, :) = I1s;
end

% for k=1:length(files)
%     photos{k} = double(photos{k});
% end

%%
exp = zeros(1, length(files));
for k = 1 : length(files)
  info = imfinfo([path,'/',files(k).name]);   
  exp(k) = info.DigitalCamera.ExposureTime;
%   photos(k, :, :, :) = photos(k, :, :, :) / info.DigitalCamera.ExposureTime;
end

%%

for i=1 : length(files)
    m(i) = mean(photos(i, :));
end

for i=1 : length(files)
    if(m(i)>mean(m))
        w(i) = max(m) - m(i);
    else
        w(i) = m(i)-min(m);
    end
end


%%
p = photos;
for i=1 : length(files)
    
    p(i, :, :, :) = photos(i, :, :, :)/exp(i);
    
end
p = median(p);

p = squeeze(p(1, :, :, :));

% pmax = max(max(max(p)));
% pmin = min(min(min(p)));
% p = (p-pmin)/(pmax-pmin)*65535;

%%
% p = zeros(size(photos, 2), size(photos, 3), size(photos, 4));
% h = waitbar(0,'linear fitting...');
% for i=1:size(photos, 2)
%     for j=1:size(photos, 3)
%         for k=1:size(photos, 4)
%             
%             
% %             p(i, j, k) = trimmean(photos(:, i, j, k)'./exp, 50);
%             p(i, j, k) = mean(photos(:, i, j, k)'./exp);
%             
%         end
%     end
%     
%     waitbar(i/size(photos, 2),h,sprintf('linear fitting: %d%%',i/size(photos, 2)))
% end
%%
% p = cell(size(photos, 2), size(photos, 3), size(photos, 4));
% h = waitbar(0,'linear fitting...');
% for i=1:size(photos, 2)
%     for j=1:size(photos, 3)
%         for k=1:size(photos, 4)
%             p{i, j, k} = polyfit(exp,photos(:, i, j, k)',1);
%         end
%     end
%     
%     waitbar(i/size(photos, 2),h,sprintf('linear fitting: %d%%',i/size(photos, 2)))
% end
