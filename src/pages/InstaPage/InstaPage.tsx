import styled from '@emotion/styled';

import Flex from '../../components/ui/Flex';
// import { ReactComponent as TitleIcon } from '../../assets/insta/insta_title.svg';
import { ReactComponent as HomeIcon } from '../../assets/insta/insta_home.svg';
import { ReactComponent as SearchIcon } from '../../assets/insta/insta_search.svg';
import { ReactComponent as ReelsIcon } from '../../assets/insta/insta_reels.svg';
import { ReactComponent as ShareIcon } from '../../assets/insta/insta_share.svg';
import { ReactComponent as HeartIcon } from '../../assets/insta/insta_heart.svg';
import { ReactComponent as HeartActiveIcon } from '../../assets/insta/insta_heart_active.svg';
import { ReactComponent as AddIcon } from '../../assets/insta/insta_add.svg';
import { ReactComponent as ProfileIcon } from '../../assets/insta/insta_profile.svg';
import { ReactComponent as MoreIcon } from '../../assets/insta/insta_more.svg';
import { ReactComponent as DotIcon } from '../../assets/insta/insta_dot.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/insta/insta_bookmark.svg';
import { ReactComponent as ChatIcon } from '../../assets/insta/insta_chat.svg';
import { ReactComponent as SettingIcon } from '../../assets/insta/insta_setting.svg';
import Typography from '../../components/ui/Typography';

const Container = styled.div``;

const Sidebar = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  border-right: 1px solid #e3e3e3;
  padding: 8px 12px 20px;
  width: 244px;
  height: 100vh;
`;

const InstaTitleWrapper = styled(Flex)`
  padding: 24px 12px 16px;
  font-size: 32px;
  font-weight: 600;
`;

const MenuItem = styled(Flex)`
  padding: 16px 12px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const ContentWrapper = styled.div`
  padding-left: 244px;
  width: 100%;
`;

const Content = styled.div`
  margin: 30px auto 64px;
  width: 600px;
`;

const ProfileInfo = styled(Flex)``;

const FollowButton = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 31px;
  font-size: 14px;
  font-weight: 500;
  /* color: #fff; */
  border-radius: 8px;
  background-color: #efefef;
  margin-left: 13px;
`;

const PostList = styled(Flex)`
  margin-top: 40px;
  flex-direction: column;
  gap: 40px;
`;
const PostItem = styled.div`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #d8d8d8;
  background: #fff;
`;

const PostHeader = styled(Flex)`
  align-items: center;
  padding: 21px 22px 21px 36px;
`;

const PostContent = styled.div`
  padding: 23px 36px 36px;
`;

const InstaPage = () => {
  const nickname = 'jipchakjoo0629';
  const menus = [
    { name: 'Home', icon: <HomeIcon /> },
    { name: 'Search', icon: <SearchIcon /> },
    { name: 'Reels', icon: <ReelsIcon /> },
    { name: 'Messages', icon: <ShareIcon /> },
    { name: 'Notifications', icon: <HeartIcon /> },
    { name: 'Create', icon: <AddIcon /> },
    { name: 'Profile', icon: <ProfileIcon /> },
  ];

  const posts = [
    {
      image:
        'https://crimescene-clue.s3.ap-northeast-2.amazonaws.com/images/%E1%84%86%E1%85%A5%E1%86%A8%E1%84%80%E1%85%AE%E1%84%85%E1%85%B3%E1%86%B7.jpg',
      imageAlt: '먹구름',
      likeCount: 4,
      content: '내 인생은 왜 이럴까.. 왜 나만 이래',
      date: '2023.07.28',
    },
    {
      image:
        'https://crimescene-clue.s3.ap-northeast-2.amazonaws.com/images/%E1%84%80%E1%85%A5%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%89%E1%85%A6%E1%86%AF%E1%84%8F%E1%85%A1.jpg',
      imageAlt: '거울셀카',
      likeCount: 3,
      tags: ['거울 셀카'],
      content: '요즘 거울에 비친 모습을 찍는 것이. 유행이라던데ㅋㅋ 한 컷! ^^',
      date: '2016.07.05',
    },
    {
      image:
        'https://crimescene-clue.s3.ap-northeast-2.amazonaws.com/images/%E1%84%89%E1%85%A6%E1%86%AF%E1%84%8F%E1%85%A1.jpeg',
      imageAlt: '셀카',
      likeCount: 2,
      tags: ['셀프 카메라', '인스타그램', '셀카'],
      content: '태어나서 처음 찍어본 셀카 사진',
      date: '2016.07.04',
    },
    {
      image:
        'https://crimescene-clue.s3.ap-northeast-2.amazonaws.com/images/%E1%84%82%E1%85%A9%E1%84%8B%E1%85%B3%E1%86%AF.jpg',
      imageAlt: '노을',
      likeCount: 7,
      tags: ['인스타 그램'],
      content: '인스타 가입했다..\n이렇게 하는 거 맞나?',
      date: '2016.07.03',
    },
  ];

  return (
    <Container>
      <Flex>
        <Sidebar dir='column'>
          <InstaTitleWrapper align='flex-end'>
            Funsta
            {/* <TitleIcon /> */}
          </InstaTitleWrapper>
          <Flex
            gutter={{ top: 16 }}
            dir='column'
            style={{ flex: 1, width: '100%' }}
          >
            {menus.map(({ icon, name }) => (
              <MenuItem gap={16} align='center'>
                {icon}
                <Typography medium>{name}</Typography>
              </MenuItem>
            ))}
          </Flex>
          <MenuItem gap={16} align='center'>
            <MoreIcon />
            <Typography medium>More</Typography>
          </MenuItem>
        </Sidebar>
        <ContentWrapper>
          <Content>
            <ProfileInfo gap={50} align='center' justify='center'>
              <ProfileIcon width={150} height={150} />
              <div>
                <Flex align='center'>
                  <Typography
                    style={{ fontSize: 20, fontWeight: 600, flex: 1 }}
                  >
                    {nickname}
                  </Typography>
                  <Flex align='center'>
                    <FollowButton>Edit profile</FollowButton>
                    {/* <AddPeopleWrapper> */}
                    <SettingIcon width={20} style={{ marginLeft: 8 }} />
                  </Flex>
                  {/* <AddPeopleIcon /> */}
                  {/* </AddPeopleWrapper> */}
                  {/* <DotIcon style={{ marginLeft: 21 }} /> */}
                </Flex>
                <Flex gap={40} gutter={{ top: 24 }}>
                  <Flex gap={4}>
                    <Typography>Posts</Typography>
                    <Typography bold>4</Typography>
                  </Flex>
                  <Flex gap={4}>
                    <Typography>Followers</Typography>
                    <Typography bold>0</Typography>
                  </Flex>
                  <Flex gap={4}>
                    <Typography>Following</Typography>
                    <Typography bold>498</Typography>
                  </Flex>
                </Flex>
                <Typography
                  style={{ marginTop: 20, fontWeight: 600, fontSize: 14 }}
                >
                  주집착
                </Typography>
              </div>
            </ProfileInfo>
            <PostList>
              {posts.map((item) => (
                <PostItem>
                  <PostHeader>
                    <ProfileIcon width={40} height={40} />
                    <Typography
                      style={{
                        fontSize: 20,
                        fontWeight: 600,
                        marginLeft: 16,
                        flex: 1,
                      }}
                    >
                      {nickname}
                    </Typography>
                    <DotIcon />
                  </PostHeader>
                  <div
                    style={{
                      position: 'relative',
                      background: 'rgb(219, 219, 219)',
                      width: 600,
                      height: 600,
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      width={600}
                      height={600}
                      style={{
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      }}
                    />
                  </div>
                  <PostContent>
                    <Flex align='center' justify='space-between'>
                      <Flex align='center' gap={16}>
                        <HeartActiveIcon width={40} height={40} />
                        <ChatIcon />
                        <ShareIcon width={40} height={40} />
                      </Flex>
                      <BookmarkIcon />
                    </Flex>
                    <Typography
                      gutter={{ top: 24 }}
                      style={{ fontSize: 20, fontWeight: 600 }}
                    >{`${item.likeCount} likes`}</Typography>
                    <Flex dir='column' justify='center' gutter={{ top: 14 }}>
                      <Typography
                        inline
                        style={{ fontSize: 20, fontWeight: 600 }}
                      >
                        {nickname}

                        <Typography
                          inline
                          style={{
                            fontSize: 20,
                            whiteSpace: 'pre-wrap',
                            marginLeft: 8,
                          }}
                        >
                          {item.content}
                        </Typography>
                        {!item.tags && (
                          <Typography
                            inline
                            // style={{ color: '#737373', fontSize: 18 }}
                            style={{ fontSize: 20 }}
                            gutter={{ left: 4 }}
                          >
                            [{item.date}]
                          </Typography>
                        )}
                      </Typography>
                      <Flex align='center'>
                        {item.tags?.map((tag, index) => (
                          <Typography
                            inline
                            style={{
                              fontSize: 20,
                              // color: '#00376B',
                              marginLeft: index !== 0 ? 4 : 0,
                            }}
                          >
                            #{tag}
                          </Typography>
                        ))}
                        {item.tags && (
                          <Typography
                            inline
                            // style={{ color: '#737373', fontSize: 18 }}
                            style={{ fontSize: 20 }}
                            gutter={{ left: 4 }}
                          >
                            [{item.date}]
                          </Typography>
                        )}
                      </Flex>
                    </Flex>
                  </PostContent>
                </PostItem>
              ))}
            </PostList>
          </Content>
        </ContentWrapper>
      </Flex>
    </Container>
  );
};

export default InstaPage;

/**
 * 아이디 jipchakjoo0629
 * 팔로워 3 / 팔로잉 498
 * 프로필 내용은 빈 칸으로
 * 댓글 전부 없음
 *
 * 주집착 펀스타와 ㄸ고같은 페이지를 웹페이지 사이즈로 제작
 * 스와핑 기능 X, 사진 내용 활성화 기능 X
 * 예시처럼, 아이디 및 정보 아래 게시글 스크롤 활성화
 */
