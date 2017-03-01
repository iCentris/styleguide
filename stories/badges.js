import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Badge from 'material-ui/Badge';
import { muiTheme } from 'storybook-addon-material-ui';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import UploadIcon from 'material-ui/svg-icons/file/cloud-upload';
import FolderIcon from 'material-ui/svg-icons/file/folder-open';


storiesOf('Badges', module)
  .addDecorator(muiTheme())
  .addWithInfo('Simple Examples','Two examples of badges containing text, using primary and secondary colors. The badge is applied to its children - an icon for the first example, and an Icon Button with tooltip for the second.', () => (
    <div>
      <Badge
        badgeContent={4}
        primary={true}
      >
        <NotificationsIcon />
      </Badge>
      <Badge
        badgeContent={10}
        secondary={true}
        badgeStyle={{top: 12, right: 12}}
      >
        <IconButton tooltip="Notifications">
          <NotificationsIcon />
        </IconButton>
      </Badge>
    </div>
  ))
  .addWithInfo('Further Examples','Badges containing an Icon Button and text, applied to an icon, and text.', () => (
    <div>
      <Badge
        badgeContent={<IconButton tooltip="Backup"><UploadIcon /></IconButton>}
      >
        <FolderIcon />
      </Badge>
      <Badge
        badgeContent="&copy;"
        badgeStyle={{fontSize: 20}}
      >
        Company Name
      </Badge>
    </div>
  ))